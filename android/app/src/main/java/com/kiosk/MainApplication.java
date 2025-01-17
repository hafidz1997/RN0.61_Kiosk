package com.kiosk;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import org.reactnative.camera.RNCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.rnfs.RNFSPackage;
import java.lang.reflect.InvocationTargetException;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    // @Override
    // protected List<ReactPackage> getPackages() {
    // @SuppressWarnings("UnnecessaryLocalVariable")
    // List<ReactPackage> packages = new PackageList(this).getPackages();
    // // Packages that cannot be autolinked yet can be added manually here, for
    // // example:
    // // packages.add(new MyReactNativePackage());
    // packages.add(new MainReactPackage());
    // packages.add(new RNCameraPackage());
    // packages.add(new RNFSPackage());
    // packages.add(new RNViewShotPackage());
    // packages.add(new PrinterPackage());
    // packages.add(new HideKeyBoardPackage());
    // // include package

    // return packages;
    // }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(), new RNCameraPackage(), new RNFSPackage(),
          new RNViewShotPackage(), new PrinterPackage(), new HideKeyBoardPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this); // Remove this line if you don't want Flipper enabled
  }

  /**
   * Loads Flipper in React Native templates.
   *
   * @param context
   */
  private static void initializeFlipper(Context context) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         * We use reflection here to pick up the class that initializes Flipper, since
         * Flipper library is not available in release mode
         */
        Class<?> aClass = Class.forName("com.facebook.flipper.ReactNativeFlipper");
        aClass.getMethod("initializeFlipper", Context.class).invoke(null, context);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
