# `parseSandLocalExecResponseBatch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/gateway/README.md).

**Módulo:** `shared/local-exec/local-exec-gateway.ts` · [README do módulo](../../../../../modules/shared/local-exec/local-exec-gateway-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486687-486693](../../../../../../reference/runtime/host-main.cjs#L486687-L486693) | `FunctionDeclaration` | não | `u2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486687-486693](../../../../../../reference/runtime/host-main.cjs#L486687-L486693) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:486687

Chamadas escritas diretamente neste corpo: `describeZodIssues`, `new SandWireParseError`, `sandLocalExecResponseBatchSchema.safeParse`.

Alvos de lançamento explícito: `SandWireParseError`.

SHA-256 do trecho: `2c6762255671405558279e38259f4963e295bff2b332d72074ea2df51aeda3b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
