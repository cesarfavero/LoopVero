# `loginFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/user-form-vault-kinds.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724715-724731](../../../../../../../reference/runtime/host-main.cjs#L724715-L724731) | `FunctionDeclaration` | não | `parts, prefill` |
| [evaluation:560274-560290](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560274-L560290) | `FunctionDeclaration` | não | `parts, prefill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724715-724731](../../../../../../../reference/runtime/host-main.cjs#L724715-L724731) | 2 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:560274-560290](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560274-L560290) | 2 | 0 | 0 | 1 | 1 | 0 |

### host:724715

Chamadas escritas diretamente neste corpo: `checkPrefillKeys`, `new SandToolInputError`, `parts.includes`, `prefill.username.trim`, `shown.map`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `174df172b7e307334facc9275ded2c80c41b85f1eee12f1da2d09267e510b602`.

### evaluation:560274

Chamadas escritas diretamente neste corpo: `checkPrefillKeys`, `new SandToolInputError`, `parts.includes`, `prefill.username.trim`, `shown.map`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `174df172b7e307334facc9275ded2c80c41b85f1eee12f1da2d09267e510b602`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
