/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/academic` | `/(tabs)/awards` | `/(tabs)/career` | `/(tabs)/creative` | `/(tabs)/dropdown` | `/(tabs)/imageModal` | `/(tabs)/recognitionImage` | `/(tabs)/statement` | `/_sitemap` | `/academic` | `/awards` | `/career` | `/creative` | `/dropdown` | `/imageModal` | `/recognitionImage` | `/statement`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
