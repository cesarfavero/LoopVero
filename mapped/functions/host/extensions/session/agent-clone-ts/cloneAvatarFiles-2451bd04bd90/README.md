# `cloneAvatarFiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-clone.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-clone-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716946-716954](../../../../../../../reference/runtime/host-main.cjs#L716946-L716954) | `FunctionDeclaration` | não | `sourceDir, targetDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716946-716954](../../../../../../../reference/runtime/host-main.cjs#L716946-L716954) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:716946

Chamadas escritas diretamente neste corpo: `copySandDataFileSync`, `getSandProfilePath`, `listConventionalAvatarFilenames`, `readLegacyProfileAvatarField`, `resolveDerivedAvatarFilename`.

SHA-256 do trecho: `773171d413372811f9198f81ab9ee1ee5b9f49d15c73c6f2d2428bad41dba54a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
