# `writeSandGroupConfig`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/group-messaging/README.md).

**Módulo:** `host/groups/group-store.ts` · [README do módulo](../../../../../modules/host/groups/group-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491475-491488](../../../../../../reference/runtime/host-main.cjs#L491475-L491488) | `FunctionDeclaration` | não | `agentDir, config2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491475-491488](../../../../../../reference/runtime/host-main.cjs#L491475-L491488) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:491475

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `ensureSandDataDirSync`, `getSandGroupPath`, `normalizeMemberIds`, `writeSandDataFileSync`.

SHA-256 do trecho: `8bde8d066849a6e1ec69098b3a32413a5e26172d615562d98adad3d25c4b02d2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
