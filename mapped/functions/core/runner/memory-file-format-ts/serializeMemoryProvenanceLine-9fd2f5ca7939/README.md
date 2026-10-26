# `serializeMemoryProvenanceLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-file-format.ts` · [README do módulo](../../../../../modules/core/runner/memory-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702763-702766](../../../../../../reference/runtime/host-main.cjs#L702763-L702766) | `FunctionDeclaration` | não | `provenance` |
| [evaluation:536507-536510](../../../../../../reference/runtime/sand-eval-runner.cjs#L536507-L536510) | `FunctionDeclaration` | não | `provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702763-702766](../../../../../../reference/runtime/host-main.cjs#L702763-L702766) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536507-536510](../../../../../../reference/runtime/sand-eval-runner.cjs#L536507-L536510) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:702763

Chamadas escritas diretamente neste corpo: `MEMORY_TURN_ID.test`.

SHA-256 do trecho: `89f79b22dd4cb88b8c947ad9076573c320c5eb4a734f621ecc993c6cf3724c11`.

### evaluation:536507

Chamadas escritas diretamente neste corpo: `MEMORY_TURN_ID.test`.

SHA-256 do trecho: `89f79b22dd4cb88b8c947ad9076573c320c5eb4a734f621ecc993c6cf3724c11`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
