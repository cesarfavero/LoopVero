# `addCitedToken`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/cloud-agent-artifact-citation.ts` · [README do módulo](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508157-508167](../../../../../../reference/runtime/host-main.cjs#L508157-L508167) | `FunctionDeclaration` | não | `cited, raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508157-508167](../../../../../../reference/runtime/host-main.cjs#L508157-L508167) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:508157

Chamadas escritas diretamente neste corpo: `.at`, `.replace`, `cited.add`, `raw.replace`, `token.split`.

SHA-256 do trecho: `a11f58c9db20d5cae49c329d275af0827feeec4fee748f2e36e1c2cfc352a3d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
