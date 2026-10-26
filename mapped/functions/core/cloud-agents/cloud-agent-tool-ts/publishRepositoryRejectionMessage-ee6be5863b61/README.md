# `publishRepositoryRejectionMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-tool.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567998-568017](../../../../../../reference/runtime/sand-eval-runner.cjs#L567998-L568017) | `FunctionDeclaration` | não | `error63, repoName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567998-568017](../../../../../../reference/runtime/sand-eval-runner.cjs#L567998-L568017) | 11 | 0 | 0 | 7 | 0 | 0 |

### evaluation:567998

Chamadas escritas diretamente neste corpo: `[computed].details.detail.trim`, `detail.includes`, `error63.findDetails`, `error63.rawMessage.includes`.

SHA-256 do trecho: `07d8b0a755dbf410ef6cb16e0932495ca2433a3ecf468237f3920f8bac3ea503`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
