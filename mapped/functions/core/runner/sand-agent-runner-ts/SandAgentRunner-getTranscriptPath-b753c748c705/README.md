# `_SandAgentRunner.getTranscriptPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:593873-593879](../../../../../../reference/runtime/sand-eval-runner.cjs#L593873-L593879) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593873-593879](../../../../../../reference/runtime/sand-eval-runner.cjs#L593873-L593879) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:593873

Chamadas escritas diretamente neste corpo: `folder.endsWith`, `folder.slice`, `this.getTranscriptId`, `this.requestContext.resolve`.

SHA-256 do trecho: `e32b7fb5ad7df764f997839e8fd7f2e35fbead91554f72b75fa0ffdd04ec4bc7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
