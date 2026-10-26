# `_SandAgentRunner.emitUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:594039-594054](../../../../../../reference/runtime/sand-eval-runner.cjs#L594039-L594054) | `method` | não | `update, updateObservers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594039-594054](../../../../../../reference/runtime/sand-eval-runner.cjs#L594039-L594054) | 4 | 0 | 0 | 0 | 0 | 0 |

### evaluation:594039

Chamadas escritas diretamente neste corpo: `this.computerUse.recordTurnEnded`, `this.observation.recordToolActivity`, `this.transport.lastReactionApplied`, `this.transport.onUpdate`, `updateObservers.noteDelivered`, `updateObservers.noteReactionApplied`, `updateObservers.noteUpdate`.

SHA-256 do trecho: `f4407b187161f1eac9a13549be43e72d80c36851641068c70029949620b24e13`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
