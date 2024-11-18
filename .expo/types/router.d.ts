/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/academic` | `/(tabs)/awards` | `/(tabs)/career` | `/(tabs)/creative` | `/(tabs)/imageModal` | `/(tabs)/recognitionImage` | `/(tabs)/statement` | `/(tabs)\dropdown` | `/_sitemap` | `/academic` | `/awards` | `/career` | `/creative` | `/imageModal` | `/recognitionImage` | `/statement`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
