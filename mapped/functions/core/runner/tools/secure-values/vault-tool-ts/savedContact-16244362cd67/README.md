# `savedContact`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768023-768038](../../../../../../../../reference/runtime/host-main.cjs#L768023-L768038) | `FunctionDeclaration` | sim | `deps, id` |
| [evaluation:563539-563554](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563539-L563554) | `FunctionDeclaration` | sim | `deps, id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768023-768038](../../../../../../../../reference/runtime/host-main.cjs#L768023-L768038) | 3 | 0 | 2 | 1 | 3 | 0 |
| [evaluation:563539-563554](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563539-L563554) | 3 | 0 | 2 | 1 | 3 | 0 |

### host:768023

Chamadas escritas diretamente neste corpo: `.includes`, `JSON.stringify`, `all.find`, `chatValueNames`, `deps.secureValues.listSavedContacts`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `a040a0be7beffafb7bc7d6f672dfc17799501ddfa6d1f536929f62e1d0899962`.

### evaluation:563539

Chamadas escritas diretamente neste corpo: `.includes`, `JSON.stringify`, `all.find`, `chatValueNames`, `deps.secureValues.listSavedContacts`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `a040a0be7beffafb7bc7d6f672dfc17799501ddfa6d1f536929f62e1d0899962`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
