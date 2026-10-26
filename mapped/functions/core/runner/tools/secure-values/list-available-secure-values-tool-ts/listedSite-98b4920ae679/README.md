# `listedSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767292-767302](../../../../../../../../reference/runtime/host-main.cjs#L767292-L767302) | `FunctionDeclaration` | sim | `ctx, requested, liveBrowserHost` |
| [evaluation:562811-562821](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562811-L562821) | `FunctionDeclaration` | sim | `ctx, requested, liveBrowserHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767292-767302](../../../../../../../../reference/runtime/host-main.cjs#L767292-L767302) | 5 | 0 | 1 | 3 | 1 | 0 |
| [evaluation:562811-562821](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562811-L562821) | 5 | 0 | 1 | 3 | 1 | 0 |

### host:767292

Chamadas escritas diretamente neste corpo: `liveBrowserHost`, `new SandToolInputError`, `parseSecureValueHttpsSite`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `2eeb3b86e994b3bbe0a44395cf4978a3b1564ac79136e33c9499ca0f97be7f87`.

### evaluation:562811

Chamadas escritas diretamente neste corpo: `liveBrowserHost`, `new SandToolInputError`, `parseSecureValueHttpsSite`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `2eeb3b86e994b3bbe0a44395cf4978a3b1564ac79136e33c9499ca0f97be7f87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
