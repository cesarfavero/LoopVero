# `isSandUserDeliveryToolCallView`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `core/runner/idle-compaction/delivery-tail.ts` · [README do módulo](../../../../../../modules/core/runner/idle-compaction/delivery-tail-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583366-583372](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583366-L583372) | `FunctionDeclaration` | não | `call` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583366-583372](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583366-L583372) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583366

Chamadas escritas diretamente neste corpo: `call.args`, `isSandUserDeliveryToolCall`.

SHA-256 do trecho: `6d2c36a69649a4a89ad1fcfa0259bed0ad2a95278f7c80b4820e1b3eeac0a74d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
