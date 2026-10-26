# `createChromeCookieImporter/inject`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/chrome-cookie-import/chrome-cookie-import-service.ts` · [README do módulo](../../../../../../modules/host/extensions/chrome-cookie-import/chrome-cookie-import-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:506700-506720](../../../../../../../reference/runtime/host-main.cjs#L506700-L506720) | `ArrowFunctionExpression` | sim | `cookies` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506700-506720](../../../../../../../reference/runtime/host-main.cjs#L506700-L506720) | 3 | 0 | 3 | 2 | 1 | 0 |

### host:506700

Chamadas escritas diretamente neste corpo: `.catch`, `JSON.stringify`, `cookies.filter`, `deps.isEnabled`, `deps.log`, `deps.removeBatchFile`, `deps.runImportScript`, `deps.writeBatchFile`, `new ChromeCookieImportGateOffError`, `parseImportOutcome`.

Alvos de lançamento explícito: `ChromeCookieImportGateOffError`.

SHA-256 do trecho: `becde4560824b1210b6f4b9207cfc8e6637590727e6e87046fe800f26b02c7ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
