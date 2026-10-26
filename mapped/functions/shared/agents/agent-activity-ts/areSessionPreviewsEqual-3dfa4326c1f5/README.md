# `areSessionPreviewsEqual`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/agent-activity.ts` · [README do módulo](../../../../../modules/shared/agents/agent-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490220-490222](../../../../../../reference/runtime/host-main.cjs#L490220-L490222) | `FunctionDeclaration` | não | `left, right` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490220-490222](../../../../../../reference/runtime/host-main.cjs#L490220-L490222) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490220

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `1cb6b6b4f1aa0c850a10930515def96b04678e3002bf9e5315b726b457504827`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
