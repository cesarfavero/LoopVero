# `candidateLabel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/virtual-mounts/memory.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769578-769590](../../../../../../reference/runtime/host-main.cjs#L769578-L769590) | `FunctionDeclaration` | não | `candidate` |
| [evaluation:565247-565259](../../../../../../reference/runtime/sand-eval-runner.cjs#L565247-L565259) | `FunctionDeclaration` | não | `candidate` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769578-769590](../../../../../../reference/runtime/host-main.cjs#L769578-L769590) | 8 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:565247-565259](../../../../../../reference/runtime/sand-eval-runner.cjs#L565247-L565259) | 8 | 0 | 0 | 4 | 0 | 0 |

### host:769578

Chamadas escritas diretamente neste corpo: `agentMemorySourceTag`, `candidate.via.trim`.

SHA-256 do trecho: `7165dc9b562835e04f6c7abb97c6d00e4ed567619a5d2c99b16aa9105e594765`.

### evaluation:565247

Chamadas escritas diretamente neste corpo: `agentMemorySourceTag`, `candidate.via.trim`.

SHA-256 do trecho: `7165dc9b562835e04f6c7abb97c6d00e4ed567619a5d2c99b16aa9105e594765`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
