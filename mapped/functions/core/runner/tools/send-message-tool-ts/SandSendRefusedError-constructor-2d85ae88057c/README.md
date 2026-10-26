# `SandSendRefusedError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761303-761311](../../../../../../../reference/runtime/host-main.cjs#L761303-L761311) | `method` | não | `category, reason, args` |
| [evaluation:552118-552126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552118-L552126) | `method` | não | `category, reason, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761303-761311](../../../../../../../reference/runtime/host-main.cjs#L761303-L761311) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:552118-552126](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552118-L552126) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:761303

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.args`, `this.category`.

SHA-256 do trecho: `78ee14920f74c38573c36f498ba0e770af1da43043d3ff18b537bd1f14391f16`.

### evaluation:552118

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.args`, `this.category`.

SHA-256 do trecho: `78ee14920f74c38573c36f498ba0e770af1da43043d3ff18b537bd1f14391f16`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
