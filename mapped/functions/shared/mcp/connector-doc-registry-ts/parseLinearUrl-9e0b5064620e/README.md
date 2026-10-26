# `parseLinearUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774060-774072](../../../../../../reference/runtime/host-main.cjs#L774060-L774072) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573275-573287](../../../../../../reference/runtime/sand-eval-runner.cjs#L573275-L573287) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774060-774072](../../../../../../reference/runtime/host-main.cjs#L774060-L774072) | 5 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:573275-573287](../../../../../../reference/runtime/sand-eval-runner.cjs#L573275-L573287) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:774060

Chamadas escritas diretamente neste corpo: `/-([0-9a-f]{8,})$/i.exec`, `LINEAR_ISSUE_RE.test`, `segmentsOf`.

SHA-256 do trecho: `0db2bfecdde5e91fdb6cb7cbef0c795b91f0338521dc565936e5fb643b15d145`.

### evaluation:573275

Chamadas escritas diretamente neste corpo: `/-([0-9a-f]{8,})$/i.exec`, `LINEAR_ISSUE_RE.test`, `segmentsOf`.

SHA-256 do trecho: `0db2bfecdde5e91fdb6cb7cbef0c795b91f0338521dc565936e5fb643b15d145`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
