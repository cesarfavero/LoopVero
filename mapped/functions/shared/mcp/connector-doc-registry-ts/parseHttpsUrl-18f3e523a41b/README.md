# `parseHttpsUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774494-774498](../../../../../../reference/runtime/host-main.cjs#L774494-L774498) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573730-573734](../../../../../../reference/runtime/sand-eval-runner.cjs#L573730-L573734) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774494-774498](../../../../../../reference/runtime/host-main.cjs#L774494-L774498) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:573730-573734](../../../../../../reference/runtime/sand-eval-runner.cjs#L573730-L573734) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:774494

Chamadas escritas diretamente neste corpo: `URL.canParse`, `new URL`, `raw.trim`.

SHA-256 do trecho: `b8c2388258f8284daab545609cdd259f3e89ffc5a5fa0eaba75d916eb35771d7`.

### evaluation:573730

Chamadas escritas diretamente neste corpo: `URL.canParse`, `new URL`, `raw.trim`.

SHA-256 do trecho: `b8c2388258f8284daab545609cdd259f3e89ffc5a5fa0eaba75d916eb35771d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
