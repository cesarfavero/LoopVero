# `decodeConfirmedUserTurnWatermark`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/shell-terminal-watch-watermark.ts` · [README do módulo](../../../../../modules/core/runner/shell-terminal-watch-watermark-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530062-530085](../../../../../../reference/runtime/sand-eval-runner.cjs#L530062-L530085) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530062-530085](../../../../../../reference/runtime/sand-eval-runner.cjs#L530062-L530085) | 5 | 0 | 0 | 6 | 0 | 1 |

### evaluation:530062

Chamadas escritas diretamente neste corpo: `.decode`, `JSON.parse`, `fromHex`, `new TextDecoder`, `refPattern.test`, `storedWatermarkSchema.safeParse`.

SHA-256 do trecho: `efc5f5945518ea378ebeae9185c12756f7866d65ebb5e75500718357f4625fc5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
