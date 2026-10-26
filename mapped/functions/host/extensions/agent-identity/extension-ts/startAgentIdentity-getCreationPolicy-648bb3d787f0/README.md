# `startAgentIdentity/getCreationPolicy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496600-496612](../../../../../../../reference/runtime/host-main.cjs#L496600-L496612) | `ArrowFunctionExpression` | sim | `signal = lifetime.signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496600-496612](../../../../../../../reference/runtime/host-main.cjs#L496600-L496612) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:496600

Chamadas escritas diretamente neste corpo: `applyReads`, `capabilitiesDeadline.run`.

SHA-256 do trecho: `a0d9135fdbe7e5900f2489352c743d3762854f6ae963a7b8d827a18d17df2c7f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
