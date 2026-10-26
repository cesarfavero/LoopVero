# `parseDraftJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/bot-templates.ts` · [README do módulo](../../../../../modules/shared/agents/bot-templates-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:484833-484839](../../../../../../reference/runtime/host-main.cjs#L484833-L484839) | `FunctionDeclaration` | não | `command` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484833-484839](../../../../../../reference/runtime/host-main.cjs#L484833-L484839) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:484833

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `eca9b3f5204debc9dcddce6d66bce3167fad77338fb430b3ac00b758f7f69312`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
