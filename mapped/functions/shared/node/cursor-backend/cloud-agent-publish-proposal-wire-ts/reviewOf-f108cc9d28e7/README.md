# `reviewOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-publish-proposal-wire.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-publish-proposal-wire-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508856-508865](../../../../../../../reference/runtime/host-main.cjs#L508856-L508865) | `FunctionDeclaration` | não | `review` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508856-508865](../../../../../../../reference/runtime/host-main.cjs#L508856-L508865) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:508856

Chamadas escritas diretamente neste corpo: `review.findings.map`.

SHA-256 do trecho: `01f2aae4071e5c05c44df02eb98078fe63c1008435134310eafca7c3fd190e9e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
