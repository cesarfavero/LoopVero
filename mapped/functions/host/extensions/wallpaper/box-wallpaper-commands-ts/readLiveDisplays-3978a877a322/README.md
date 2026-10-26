# `readLiveDisplays`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/wallpaper/box-wallpaper-commands.ts` · [README do módulo](../../../../../../modules/host/extensions/wallpaper/box-wallpaper-commands-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:784888-784901](../../../../../../../reference/runtime/host-main.cjs#L784888-L784901) | `FunctionDeclaration` | sim | `socketDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784888-784901](../../../../../../../reference/runtime/host-main.cjs#L784888-L784901) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:784888

Chamadas escritas diretamente neste corpo: `.catch`, `.sort`, `displays.push`, `entries.flatMap`, `stats.isSocket`.

SHA-256 do trecho: `81b59813d18ca5b940d877e75303158675f837700cb03498983953468408392a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
