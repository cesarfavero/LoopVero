# `parsedTime`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-types/memory-folders.ts` · [README do módulo](../../../../../../modules/core/runner/memory-types/memory-folders-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:754689-754692](../../../../../../../reference/runtime/host-main.cjs#L754689-L754692) | `FunctionDeclaration` | não | `createdAt` |
| [evaluation:537656-537659](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537656-L537659) | `FunctionDeclaration` | não | `createdAt` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754689-754692](../../../../../../../reference/runtime/host-main.cjs#L754689-L754692) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537656-537659](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537656-L537659) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:754689

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`.

SHA-256 do trecho: `2af27b8d99266cf4b9486af263e5a3a965bdff5aad7e6dedba9bf786f6d07fbd`.

### evaluation:537656

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`.

SHA-256 do trecho: `2af27b8d99266cf4b9486af263e5a3a965bdff5aad7e6dedba9bf786f6d07fbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
