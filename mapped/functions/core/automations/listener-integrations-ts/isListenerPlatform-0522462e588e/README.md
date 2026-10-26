# `isListenerPlatform`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/listener-integrations.ts` · [README do módulo](../../../../../modules/core/automations/listener-integrations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505146-505148](../../../../../../reference/runtime/host-main.cjs#L505146-L505148) | `FunctionDeclaration` | não | `value` |
| [evaluation:570007-570009](../../../../../../reference/runtime/sand-eval-runner.cjs#L570007-L570009) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505146-505148](../../../../../../reference/runtime/host-main.cjs#L505146-L505148) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570007-570009](../../../../../../reference/runtime/sand-eval-runner.cjs#L570007-L570009) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:505146

Chamadas escritas diretamente neste corpo: `LISTENER_INTEGRATION_PLATFORMS.some`.

SHA-256 do trecho: `c3bcbe417adadcd1b2bfb85c907af3b6a8fd8070db4591a215fd17db3531bff6`.

### evaluation:570007

Chamadas escritas diretamente neste corpo: `LISTENER_INTEGRATION_PLATFORMS.some`.

SHA-256 do trecho: `85a541590732839e11fdb54641bd33a284fd618c3476b257646e8cd8fed9d863`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
