# `matching`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773966-773968](../../../../../../reference/runtime/host-main.cjs#L773966-L773968) | `FunctionDeclaration` | não | `value, pattern` |
| [evaluation:573181-573183](../../../../../../reference/runtime/sand-eval-runner.cjs#L573181-L573183) | `FunctionDeclaration` | não | `value, pattern` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773966-773968](../../../../../../reference/runtime/host-main.cjs#L773966-L773968) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573181-573183](../../../../../../reference/runtime/sand-eval-runner.cjs#L573181-L573183) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:773966

Chamadas escritas diretamente neste corpo: `pattern.test`.

SHA-256 do trecho: `22e3b4852f6761b71434d37f2910c875ea011bd1bb61caf64febca9d43ab90fb`.

### evaluation:573181

Chamadas escritas diretamente neste corpo: `pattern.test`.

SHA-256 do trecho: `22e3b4852f6761b71434d37f2910c875ea011bd1bb61caf64febca9d43ab90fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
