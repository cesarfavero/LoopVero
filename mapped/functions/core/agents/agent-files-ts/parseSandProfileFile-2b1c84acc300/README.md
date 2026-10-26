# `parseSandProfileFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-files.ts` · [README do módulo](../../../../../modules/core/agents/agent-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629047-629050](../../../../../../reference/runtime/sand-eval-runner.cjs#L629047-L629050) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629047-629050](../../../../../../reference/runtime/sand-eval-runner.cjs#L629047-L629050) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629047

Chamadas escritas diretamente neste corpo: `parseProfileJson`, `profileConfigFromJson`.

SHA-256 do trecho: `7ddfbdf97527a7d55ab00e3918ecd8ba63461bd51ffeabf2791b6c96644cfbac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
