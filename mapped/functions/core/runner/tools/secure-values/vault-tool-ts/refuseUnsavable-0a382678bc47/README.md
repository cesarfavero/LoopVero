# `refuseUnsavable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767964-767969](../../../../../../../../reference/runtime/host-main.cjs#L767964-L767969) | `FunctionDeclaration` | não | `values` |
| [evaluation:563480-563485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563480-L563485) | `FunctionDeclaration` | não | `values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767964-767969](../../../../../../../../reference/runtime/host-main.cjs#L767964-L767969) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:563480-563485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563480-L563485) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:767964

Chamadas escritas diretamente neste corpo: `definedValues`, `new SandToolInputError`, `parseVaultContactInput`, `vaultContactInputOfForm`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `2a40fced15f302d0ce9b1585ffa9c8dc46f6b49aa14daaa0e9111ac9ff3b94a4`.

### evaluation:563480

Chamadas escritas diretamente neste corpo: `definedValues`, `new SandToolInputError`, `parseVaultContactInput`, `vaultContactInputOfForm`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `efe94e263166e8b613586c6d1db7b6b00f342f75fa05bb1f252d9d116f6bce21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
