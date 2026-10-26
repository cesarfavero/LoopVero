# `encodeTextContent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-encoding.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-encoding-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759973-759983](../../../../../../../reference/runtime/host-main.cjs#L759973-L759983) | `FunctionDeclaration` | não | `message` |
| [evaluation:550577-550587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550577-L550587) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759973-759983](../../../../../../../reference/runtime/host-main.cjs#L759973-L759983) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:550577-550587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550577-L550587) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:759973

Chamadas escritas diretamente neste corpo: `.join`, `images.map`.

SHA-256 do trecho: `7c5e864823405ac109616b95f293f2c7895ec4ca106874a59d7d2019f5d9e5a8`.

### evaluation:550577

Chamadas escritas diretamente neste corpo: `.join`, `images.map`.

SHA-256 do trecho: `7c5e864823405ac109616b95f293f2c7895ec4ca106874a59d7d2019f5d9e5a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
