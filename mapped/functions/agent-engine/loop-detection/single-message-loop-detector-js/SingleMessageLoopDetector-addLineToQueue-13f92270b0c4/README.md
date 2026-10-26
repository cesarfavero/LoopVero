# `SingleMessageLoopDetector.addLineToQueue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `agent-engine/loop-detection/single-message-loop-detector.js` · [README do módulo](../../../../../modules/agent-engine/loop-detection/single-message-loop-detector-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:624356-624364](../../../../../../reference/runtime/host-main.cjs#L624356-L624364) | `method` | não | `line` |
| [evaluation:310478-310486](../../../../../../reference/runtime/sand-eval-runner.cjs#L310478-L310486) | `method` | não | `line` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624356-624364](../../../../../../reference/runtime/host-main.cjs#L624356-L624364) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:310478-310486](../../../../../../reference/runtime/sand-eval-runner.cjs#L310478-L310486) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:624356

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.lineBuffer[computed]`, `this.lineCount`, `this.startIdx`.

SHA-256 do trecho: `bebd5de0a7792f984b0f3509f7e7c246a01ecad141ccaafa1f2b8015f5406998`.

### evaluation:310478

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.lineBuffer[computed]`, `this.lineCount`, `this.startIdx`.

SHA-256 do trecho: `bebd5de0a7792f984b0f3509f7e7c246a01ecad141ccaafa1f2b8015f5406998`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
