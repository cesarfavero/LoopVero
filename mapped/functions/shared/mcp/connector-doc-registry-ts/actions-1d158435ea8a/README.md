# `actions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774211-774213](../../../../../../reference/runtime/host-main.cjs#L774211-L774213) | `FunctionDeclaration` | não | `action, tools, kind = "document"` |
| [evaluation:573426-573428](../../../../../../reference/runtime/sand-eval-runner.cjs#L573426-L573428) | `FunctionDeclaration` | não | `action, tools, kind = "document"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774211-774213](../../../../../../reference/runtime/host-main.cjs#L774211-L774213) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573426-573428](../../../../../../reference/runtime/sand-eval-runner.cjs#L573426-L573428) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774211

Chamadas escritas diretamente neste corpo: `Object.fromEntries`, `tools.map`.

SHA-256 do trecho: `fbb7cc642d7a6e46549e788fdd92989b1368795520a09725a3d6b77534f16c6f`.

### evaluation:573426

Chamadas escritas diretamente neste corpo: `Object.fromEntries`, `tools.map`.

SHA-256 do trecho: `fbb7cc642d7a6e46549e788fdd92989b1368795520a09725a3d6b77534f16c6f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
