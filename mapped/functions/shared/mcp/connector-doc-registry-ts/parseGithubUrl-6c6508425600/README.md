# `parseGithubUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774091-774111](../../../../../../reference/runtime/host-main.cjs#L774091-L774111) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573306-573326](../../../../../../reference/runtime/sand-eval-runner.cjs#L573306-L573326) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774091-774111](../../../../../../reference/runtime/host-main.cjs#L774091-L774111) | 7 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:573306-573326](../../../../../../reference/runtime/sand-eval-runner.cjs#L573306-L573326) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:774091

Chamadas escritas diretamente neste corpo: `/^\d+$/.test`, `matching`, `path33.join`, `segments.at`, `segmentsOf`.

SHA-256 do trecho: `72e459a0f8af7e468c719573b1651e62193a4d3f2e001dca4220db4611d0deea`.

### evaluation:573306

Chamadas escritas diretamente neste corpo: `/^\d+$/.test`, `matching`, `path33.join`, `segments.at`, `segmentsOf`.

SHA-256 do trecho: `72e459a0f8af7e468c719573b1651e62193a4d3f2e001dca4220db4611d0deea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
