# `listCredentialsForSite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-credential-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751921-751939](../../../../../../../reference/runtime/host-main.cjs#L751921-L751939) | `FunctionDeclaration` | sim | `deps, args, site, formGuidance` |
| [evaluation:524987-525005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524987-L525005) | `FunctionDeclaration` | sim | `deps, args, site, formGuidance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751921-751939](../../../../../../../reference/runtime/host-main.cjs#L751921-L751939) | 3 | 0 | 5 | 2 | 0 | 0 |
| [evaluation:524987-525005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524987-L525005) | 3 | 0 | 5 | 2 | 0 | 0 |

### host:751921

Chamadas escritas diretamente neste corpo: `deps.isConnected`, `listConnectedCredentials`, `notConnectedLoginGuidance`.

SHA-256 do trecho: `c7a2bc2ff3578b010e786e5684b0cdfd9947fe6ed98bb642c949b3fd447b5ca8`.

### evaluation:524987

Chamadas escritas diretamente neste corpo: `deps.isConnected`, `listConnectedCredentials`, `notConnectedLoginGuidance`.

SHA-256 do trecho: `c7a2bc2ff3578b010e786e5684b0cdfd9947fe6ed98bb642c949b3fd447b5ca8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
