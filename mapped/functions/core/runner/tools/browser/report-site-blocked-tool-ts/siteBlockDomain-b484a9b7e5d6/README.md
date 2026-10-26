# `siteBlockDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/report-site-blocked-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/report-site-blocked-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776710-776719](../../../../../../../../reference/runtime/host-main.cjs#L776710-L776719) | `FunctionDeclaration` | não | `site` |
| [evaluation:576361-576370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576361-L576370) | `FunctionDeclaration` | não | `site` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776710-776719](../../../../../../../../reference/runtime/host-main.cjs#L776710-L776719) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:576361-576370](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576361-L576370) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:776710

Chamadas escritas diretamente neste corpo: `URL_SCHEME_RE.test`, `boundedSiteBucket`, `new URL`, `site.trim`.

Alvos de atribuição ou incremento: `hostname4`.

SHA-256 do trecho: `75351e3db2c6b4105344a82fe81d3e747e05cca17b86a45f635dd6403d5aafdd`.

### evaluation:576361

Chamadas escritas diretamente neste corpo: `URL_SCHEME_RE.test`, `boundedSiteBucket`, `new URL`, `site.trim`.

Alvos de atribuição ou incremento: `hostname3`.

SHA-256 do trecho: `887200eb47068c598bfa176ec43f9358613b5045c54070eaaa451e6a3d613d64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
