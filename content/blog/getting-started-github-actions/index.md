---
title: ブランチ名をもとにIssueとPull Requestを自動で紐付けるGitHub Actionを作った
date: '2019-02-07T15:22:50.035Z'
---
昨年10月に発表されてから、ずっと気になっていたGitHub Actionsを触ってみました。

[GitHub Actions： みなさんが開発し、GitHubで実行 - The GitHub Blog - Japan](https://github.blog/jp/2018-10-24-action-demos/)

## 作ったもの
規則に従ったブランチ名でPull Requestを作ったときに、関連するIssueのリンクをPull Requestのコメントに追加するGitHub Actionです。

[kentaro-m/add-an-issue-reference-action: A GitHub Action for adding a related issue reference to a pull request.](https://github.com/kentaro-m/add-an-issue-reference-action)

以下の例では、`issue-`のプレフィックスと関連するIssueの番号を含んだブランチ名で作業すると、Pull Request作成時に自動的にリンクが追加されます。

![](https://raw.githubusercontent.com/kentaro-m/add-an-issue-reference-action/master/add-an-issue-reference.png)

プロダクトを運用していると過去の作業記録を確認したいことがたまにあります。その際にIssueに関連作業がすべて記録されていると非常に助かります。しかし、手動で記録する場合は漏れがあることが課題でした。

以前に業務で使っていたJIRAとBitbucketではチケットキーをブランチ名に指定し、Pull Requestを作成すると、自動的に紐付ける便利機能がありました。GitHubでも同様の機能があれば、課題を解決できると思い、作ってみました。

[開発ツールとの連携 - Atlassian Documentation](https://ja.confluence.atlassian.com/adminjiracloud/integrating-with-development-tools-776636216.html)

## 使い方
GitHub Actionsを[有効](https://github.com/features/actions)にした状態で、下記の内容を`.github/main.workflow`に記載します。

```hcl
workflow "Add an issue reference to a pull request" {
  on = "pull_request"
  resolves = "Add an issue reference"
}

action "Add an issue reference" {
  uses = "kentaro-m/add-an-issue-reference-action@master"
  secrets = ["GITHUB_TOKEN"]
  # ブランチ名のプレフィックス設定
  # 以下の指定のときはissue-3のようにブランチを切って開発する
  args = "{\"branch\":\"issue\"}"
}
```

あとは設定ファイルで指定した通りにブランチを切って、コミットし、Pull Requestを出せば動作します。

## さいごに
開発者のアイデア次第で様々な作業を自動化できそうです。皆さんもGitHub Actionsで自動化に挑戦してみてください。
