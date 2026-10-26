# `artifactPathRelativeToBoxDir`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508231-508239](../../../../../../../reference/runtime/host-main.cjs#L508231-L508239) | `FunctionDeclaration` | não | `absolutePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508231-508239](../../../../../../../reference/runtime/host-main.cjs#L508231-L508239) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:508231

Chamadas escritas diretamente neste corpo: `absolutePath.slice`, `absolutePath.startsWith`, `isAgentStoreArtifactPath`.

SHA-256 do trecho: `5888d96d2a2ccbb4a12344edaaa01ba429cd4b03bc0abfb969c9188390bf9835`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
