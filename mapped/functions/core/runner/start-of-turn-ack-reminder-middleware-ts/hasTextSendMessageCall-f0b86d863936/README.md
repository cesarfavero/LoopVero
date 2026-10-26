# `hasTextSendMessageCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/start-of-turn-ack-reminder-middleware.ts` · [README do módulo](../../../../../modules/core/runner/start-of-turn-ack-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587028-587038](../../../../../../reference/runtime/sand-eval-runner.cjs#L587028-L587038) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587028-587038](../../../../../../reference/runtime/sand-eval-runner.cjs#L587028-L587038) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587028

Chamadas escritas diretamente neste corpo: `message.content.some`.

SHA-256 do trecho: `fb7683db5274a150eac4d4f4a6c7262c4be42d45e60419042c77dd27f0d90a22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
