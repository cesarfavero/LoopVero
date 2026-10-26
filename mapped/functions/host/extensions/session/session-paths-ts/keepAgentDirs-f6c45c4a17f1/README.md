# `keepAgentDirs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-paths.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:718226-718231](../../../../../../../reference/runtime/host-main.cjs#L718226-L718231) | `FunctionDeclaration` | não | `entries, reportSkipped` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718226-718231](../../../../../../../reference/runtime/host-main.cjs#L718226-L718231) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718226

Chamadas escritas diretamente neste corpo: `dirs.flatMap`, `entries.filter`, `reportSkipped`.

SHA-256 do trecho: `a8c5253753318fdb4ae6202576ad5f31d9a2ae389c25c60edb47bf05d548c0e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
