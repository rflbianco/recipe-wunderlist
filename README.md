# Wunderlist - Franz Recipe

A simple [Franz Recipe][franz-plugins] for running Wunderlist inside Franz 5+. Franz used to have support for Wunderlist in its official plugins list until version 5. However, with the new version 5+ plugin model, now called **Recipes**, it has been deprecated. It now lies in the [plugins-legacy][franz-plugins-legacy] repository.

## Installation

As of Franz 5, **recipes** are deployed globally from Franz's central repository. So, this recipe has been made to allow you to run Wunderlist inside Franz using the [**dev mode**][franz-integration], while a official one is not available.

To install, just clone this repository in `recipes/dev` directory inside your Franz's local configuration folder as described in [developer's documentation][franz-plugin-installation].

## Attribution

Main Icon made by [Alessandro Roncone][alessandro-roncone], taken from [FlatWoken][] icon theme
- Source:	https://github.com/alecive/FlatWoken/blob/master/FlatWoken/scalable/apps/wunderlist.svg
- Website: https://github.com/alecive/FlatWoken
- Copyright: 2014  Alessandro Roncone <alecive87@gmail.com>
- License: [CC-BY-SA 4][cc-by-sa-4]

## License

This work is released under [GPL v3.0](LICENSE.md).

Franz uses a MIT license. So, this should be the choosen one. However, as FlatWoken is released under CC-BY-SA 4.0, the only option compatible is GNU GPL v3.0.
Once there is another option for the icons that might be compatible with MIT, the license of this repository may be changed to that.

[franz-plugins]: https://github.com/meetfranz/plugins
[franz-plugins-legacy]: https://github.com/meetfranz/plugins-legacy
[franz-integration]: https://github.com/meetfranz/plugins/blob/master/docs/integration.md
[franz-plugin-installation]: https://github.com/meetfranz/plugins/blob/master/docs/integration.md#installation

[flatwoken]: https://github.com/alecive/FlatWoken
[alessandro-roncone]: https://github.com/alecive
[cc-by-sa-4]: http://creativecommons.org/licenses/by-sa/4.0/
