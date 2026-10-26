# `parseTraceIp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/egress-ip-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/egress-ip-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729893-729901](../../../../../../../reference/runtime/host-main.cjs#L729893-L729901) | `FunctionDeclaration` | não | `body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729893-729901](../../../../../../../reference/runtime/host-main.cjs#L729893-L729901) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:729893

Chamadas escritas diretamente neste corpo: `.trim`, `body.split`, `line.trim`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 do trecho: `0669c61ded6ff0e7428ece3fd9422aa7b9ff791df3b262d6efba31e6e16f9193`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
