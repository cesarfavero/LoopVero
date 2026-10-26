# `cloneStoreDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-clone.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-clone-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716918-716925](../../../../../../../reference/runtime/host-main.cjs#L716918-L716925) | `FunctionDeclaration` | não | `sourceDir, targetDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716918-716925](../../../../../../../reference/runtime/host-main.cjs#L716918-L716925) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:716918

Chamadas escritas diretamente neste corpo: `checkpointSandAgentDb`, `copySandDataFileSync`, `new SandAgentCloneError`.

Alvos de lançamento explícito: `SandAgentCloneError`.

SHA-256 do trecho: `f36e5d4a26aeeffcfbaea1077afab2a4eaa51887a25717d2645db6877a5237ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
