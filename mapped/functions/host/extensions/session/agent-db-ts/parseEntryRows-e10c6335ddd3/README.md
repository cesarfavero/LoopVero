# `parseEntryRows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-db.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-db-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718254-718262](../../../../../../../reference/runtime/host-main.cjs#L718254-L718262) | `FunctionDeclaration` | não | `rows` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718254-718262](../../../../../../../reference/runtime/host-main.cjs#L718254-L718262) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:718254

Chamadas escritas diretamente neste corpo: `entries.push`, `parseTranscriptEntry`.

SHA-256 do trecho: `14a5651a0ddd3fe75f3d568f8c8a988ebd3a0e8d477aff1ba1e42b6bfb577cc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
