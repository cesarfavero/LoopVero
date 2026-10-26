# `isAbsoluteHttpUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750426-750428](../../../../../../../reference/runtime/host-main.cjs#L750426-L750428) | `FunctionDeclaration` | não | `url2` |
| [evaluation:523277-523279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523277-L523279) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750426-750428](../../../../../../../reference/runtime/host-main.cjs#L750426-L750428) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523277-523279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523277-L523279) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750426

Chamadas escritas diretamente neste corpo: `ABSOLUTE_HTTP_URL.test`, `isHttpExternalUrl`.

SHA-256 do trecho: `d4a8c4d06bc161baabf66aafcfe5c7dbc86c4389c7d3a2c25b5a974af4d3527c`.

### evaluation:523277

Chamadas escritas diretamente neste corpo: `ABSOLUTE_HTTP_URL.test`, `isHttpExternalUrl`.

SHA-256 do trecho: `d4a8c4d06bc161baabf66aafcfe5c7dbc86c4389c7d3a2c25b5a974af4d3527c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
