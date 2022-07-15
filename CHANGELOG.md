# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Ingest new entity `datadog_host`
- Build new relationship `datadog_account_has_host`
- Updated `iterateApi` to handle both V1 and V2 of Datadog API Client

## 2.0.0 - 2022-08-17

### Added

- Added optional environment field `DATADOG_ORG_PUBLIC_ID` allowing users to
  enter their organization's public ID resulting in integration being able to
  fetch details about it. If not provided, a default `Account` entity will be
  created instead.

### Changed

- Bumped `@jupiterone/integration-sdk-core` to `^8.22.0`
- Bumped `@jupiterone/integration-sdk-dev-tools` to `^8.22.0`
- Bumped `@jupiterone/integration-sdk-testing` to `^8.22.0`

## 1.1.0 - 2022-08-03

### Added

- Added optional host config field. The Datadog US host is `datadoghq.us` and
  the EU host is `datadoghq.eu`

## [1.0.1] - 2022-01-28

### Fixed

- Use `await` for `iterateApi` callback function to properly create all the user
  roles relationships

## [1.0.0] - 2022-01-14

### Added

- Ingest new entity `datadog_user`
- Ingest new entity `datadog_account`
- Ingest new entity `datadog_role`
- Build new relationship `datadog_account_has_user`
- Build new relationship `datadog_account_has_role`
- Build new relationship `datadog_user_assigned_role`
