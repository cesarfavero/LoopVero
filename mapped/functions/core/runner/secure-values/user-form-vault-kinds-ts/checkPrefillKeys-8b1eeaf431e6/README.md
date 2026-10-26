# `checkPrefillKeys`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/user-form-vault-kinds.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724707-724714](../../../../../../../reference/runtime/host-main.cjs#L724707-L724714) | `FunctionDeclaration` | não | `kind, allowed, prefill` |
| [evaluation:560266-560273](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560266-L560273) | `FunctionDeclaration` | não | `kind, allowed, prefill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724707-724714](../../../../../../../reference/runtime/host-main.cjs#L724707-L724714) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:560266-560273](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560266-L560273) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:724707

Chamadas escritas diretamente neste corpo: `.find`, `.join`, `JSON.stringify`, `Object.keys`, `allowed.map`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `28c12cc7757b06f5c40eb764535c1d1d9a0d38c620b9b385014703451070ae87`.

### evaluation:560266

Chamadas escritas diretamente neste corpo: `.find`, `.join`, `JSON.stringify`, `Object.keys`, `allowed.map`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `46b4ce3a1f0ad221e88e1a48c3e6216e84552bb0c5c0115b4db5b7a8e37b530b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
