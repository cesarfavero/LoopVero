# `listedDomains`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767194-767203](../../../../../../../../reference/runtime/host-main.cjs#L767194-L767203) | `FunctionDeclaration` | não | `metadata2, site` |
| [evaluation:562713-562722](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562713-L562722) | `FunctionDeclaration` | não | `metadata2, site` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767194-767203](../../../../../../../../reference/runtime/host-main.cjs#L767194-L767203) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:562713-562722](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562713-L562722) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:767194

Chamadas escritas diretamente neste corpo: `domains.add`, `new Set`, `parseSecureValueHttpsSite`, `secureValueDomainMatchesSite`.

SHA-256 do trecho: `d6f843f137ddc675d2232c7b265fead13d9ec1ab88c2a9f2fa5f1c01f2d8876e`.

### evaluation:562713

Chamadas escritas diretamente neste corpo: `domains.add`, `new Set`, `parseSecureValueHttpsSite`, `secureValueDomainMatchesSite`.

SHA-256 do trecho: `370bff667d38d734d60feda151ba911d52b998dee1b0e22b03f2fdc30c4d9327`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
