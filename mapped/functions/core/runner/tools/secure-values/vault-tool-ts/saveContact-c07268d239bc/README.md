# `saveContact`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768039-768055](../../../../../../../../reference/runtime/host-main.cjs#L768039-L768055) | `FunctionDeclaration` | sim | `deps, call, contact` |
| [evaluation:563555-563571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563555-L563571) | `FunctionDeclaration` | sim | `deps, call, contact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768039-768055](../../../../../../../../reference/runtime/host-main.cjs#L768039-L768055) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563555-563571](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563555-L563571) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:768039

Chamadas escritas diretamente neste corpo: `Object.keys`, `confirmForm`, `contactPrefill`, `new SandToolInputError`, `refuseUnsavable`, `showCard`, `vaultContactChangeSummary`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `4a2b1f7b838ebb17ab813dc5ab103b7b661ac2a07ddf0b1298c77497282d1957`.

### evaluation:563555

Chamadas escritas diretamente neste corpo: `Object.keys`, `confirmForm`, `contactPrefill`, `new SandToolInputError`, `refuseUnsavable`, `showCard`, `vaultContactChangeSummary`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `4a2b1f7b838ebb17ab813dc5ab103b7b661ac2a07ddf0b1298c77497282d1957`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
