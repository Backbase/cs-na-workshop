# Backbase Banking Apps contribution rules

Great to see you here ready to contribute to this project! You can find useful information below.

## Development Setup

Could be found in [README](./README.md#Development-Setup).

## Contribution

In general, the workflow looks as follows:

- Create a branch
- Apply all necessary changes, mind a linting and a unit test coverage
- Open a PR, check that pipeline build is successful

### Auto Versioning

A pipeline is set up to update an app version automatically, so it's highly encouraged to not change it manually and avoid possible conflicts PR and keep work in a predictable manner.
The version would be bumped and new tag would be associated with a commit.

Following rules are applied during automatic update:

- if branch has a `bugfix` or `hotfix` part in a name, then it's treated as a `patch` update, i.e. `x.y.z` -> `x.y.z+1`
- in other cases it's `minor`, i.e. `x.y.z` -> `x.y+1.z`
  If a major release with breaking changes takes place, then the version must be bumped manually using [an instruction](#Manual-Versioning) for manual versioning below.

### Manual Versioning

If you need to change an app version in `package.json` and `package-lock.json` manually (e.g. a major update, etc.), don't forget to add to a commit message following text - `"... bump/<version> ..."`.
Otherwise, the pipeline will bump the version automatically.

### Release Versioning

If the pipeline runs for a release branch, then an image and commit tags would be automatically set in CalVer according to branch name. For commit the name of a value stream would also be used.
I.e. branch `release/<VS_name>/2022.04` sets an image tag to `2022.04` and a commit tag to `business/2022.04`. This functionality _doesn't_ affect a commit tag.

## Branching strategy

This repository uses trunk-based development approach. That means that developers open PRs to the single `main` from their short-lived feature branches.
This strategy is [recommended](https://nx.dev/guides/monorepo-nx-enterprise#trunk-based-development) by the NX team.
More information about trunk-based development could be found [here](https://trunkbaseddevelopment.com/).

### During release

During a release process each Value Stream create a branch in a format `release/<VS_name>/<version>`, e.g. `release/business/2022.04`.
If an update or a fix required for the release, it should be addressed in `main` and then a person responsible for the release cherry-pick commits from `main`.

#### Re-tagging an image

A person conducting a release can use [this pipeline](https://jenkins.backbase.eu/job/Frontend%20Guild/job/BSFG/view/Freestyle/job/promote-banking-app-image-to-stable/)
to re-tag an image from SemVer to CalVer and/or promote it withing harbor projects (from `staging` to `internal`) using job's parameters.
