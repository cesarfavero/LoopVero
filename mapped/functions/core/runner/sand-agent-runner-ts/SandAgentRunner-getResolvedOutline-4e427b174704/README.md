# `_SandAgentRunner.getResolvedOutline`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593861-593872](../../../../../../reference/runtime/sand-eval-runner.cjs#L593861-L593872) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593861-593872](../../../../../../reference/runtime/sand-eval-runner.cjs#L593861-L593872) | 0 | 0 | 1 | 2 | 0 | 1 |

### evaluation:593861

Chamadas escritas diretamente neste corpo: `deriveConversationStateFromStructure`, `deriveOutlineFromConversationState`, `this.getBlobStore`, `this.getConversationState`.

SHA-256 do trecho: `b0bcc410d3411ba1b72a1c2521d975519a0b38117f299935f5aafbf6c6c87448`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
