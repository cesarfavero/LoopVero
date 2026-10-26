# `toAliasBoxPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-images.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-images-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567304-567308](../../../../../../reference/runtime/sand-eval-runner.cjs#L567304-L567308) | `FunctionDeclaration` | não | `boxPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567304-567308](../../../../../../reference/runtime/sand-eval-runner.cjs#L567304-L567308) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567304

Chamadas escritas diretamente neste corpo: `import_node_path37.posix.normalize`, `normalized.slice`, `normalized.startsWith`.

SHA-256 do trecho: `b47fac969a2e0555075b24bdaa683785211eb6d11da336cd1a7e0b51658de588`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
